export const PORTFOLIO_QUERY = `*[_type == "portfolio"]{
    ...,
    "projects": projects[]->{
        ...
    },
    "technologies": technologies[]->{
        ...
    },
    "socialLinks": socialLinks[]->{
        ...
    },
    "faqs": faqs[]->{
        ...
    }
}`;

export const PROJECTS_QUERY = `*[_type == "project"]{
    ...,
    "technologies": technologies[]->{
        ...
    }
}`;

export const FAQS_QUERY = `*[_type == "faqs"]{
    ...,
}`;

export const TECHNOLOGIES_QUERY = `*[_type == "technology"]{
    ...,
}`;

export const SKILLS_QUERY = `*[_type == "skill"]{
    ...,
}`;

export const ABOUT_QUERY = `*[_type == "about"]{
    ...,
    "certificateList": certificateList[]->{
        ...,
    }[0],
}`;

export const CERTIFICATES_QUERY = `*[_type == "certificate"]{
    ...,
}`;

export const SOCIAL_QUERY = `*[_type == "social"]{
    ...,
}`;

export const PROJECTS_DETAIL_QUERY = `*[_type == "project" && slug.current == $slug][0]{
    ...,
    "technologies": technologies[]->{
        _id,
        name,
        image,
        icon,
        description,
    },
}`;
