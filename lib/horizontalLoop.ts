import { gsap } from "gsap";

type HorizontalLoopConfig = {
    repeat?: number;
    paused?: boolean;
    speed?: number;
    snap?: number | false;
    paddingRight?: number | string;
    reversed?: boolean;
};

type SnapFunction = (v: number) => number;

export function horizontalLoop(
    items: HTMLDivElement[] | HTMLCollection | Element[],
    config?: HorizontalLoopConfig
) {
    const itemArray = Array.from(items) as HTMLDivElement[];
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat ?? -1,
        paused: config.paused ?? false,
        defaults: { ease: "none" },
        onReverseComplete: function () {
            tl.totalTime(tl.rawTime() + tl.duration() * 100);
        },
    });
    const length = itemArray.length;
    const startX = itemArray[0].offsetLeft;
    const times: number[] = [];
    const widths: number[] = [];
    const xPercents: number[] = [];
    let curIndex = 0;
    const pixelsPerSecond = (config.speed || 1) * 100;
    const snap: SnapFunction = config.snap === false
        ? (v: number) => v
        : gsap.utils.snap(config.snap ?? 1);
    const totalWidth =
        itemArray[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        itemArray[length - 1].offsetWidth *
        Number(gsap.getProperty(itemArray[length - 1], "scaleX")) +
        (typeof config.paddingRight === "number"
            ? config.paddingRight
            : parseFloat(config.paddingRight ?? "0"));

    gsap.set(itemArray, {
        xPercent: (i: number, el: Element) => {
            const w = (widths[i] = parseFloat(String(gsap.getProperty(el, "width", "px"))));
            xPercents[i] = snap(
                (parseFloat(String(gsap.getProperty(el, "x", "px"))) / w) * 100 +
                Number(gsap.getProperty(el, "xPercent"))
            );
            return xPercents[i];
        },
    });
    gsap.set(itemArray, { x: 0 });

    for (let i = 0; i < length; i++) {
        const item = itemArray[i];
        const curX = (xPercents[i] / 100) * widths[i];
        const distanceToStart = item.offsetLeft + curX - startX;
        const distanceToLoop =
            distanceToStart + widths[i] * Number(gsap.getProperty(item, "scaleX"));
        tl.to(
            item,
            {
                xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                duration: distanceToLoop / pixelsPerSecond,
            },
            0
        )
            .fromTo(
                item,
                {
                    xPercent: snap(
                        ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                    ),
                },
                {
                    xPercent: xPercents[i],
                    duration:
                        (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                    immediateRender: false,
                },
                distanceToLoop / pixelsPerSecond
            )
            .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
    }

    function toIndex(index: number, vars?: Record<string, any>) {
        vars = vars || {};
        if (Math.abs(index - curIndex) > length / 2) {
            index += index > curIndex ? -length : length;
        }
        const newIndex = gsap.utils.wrap(0, length, index);
        let time = times[newIndex];
        if ((time > tl.time()) !== (index > curIndex)) {
            vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }

    tl.next = (vars?: Record<string, any>) => toIndex(curIndex + 1, vars);
    tl.previous = (vars?: Record<string, any>) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index: number, vars?: Record<string, any>) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true);

    if (config.reversed) {
        if (tl.vars.onReverseComplete) {
            (tl.vars.onReverseComplete as () => void)();
        }
        tl.reverse();
    }
    return tl;
}