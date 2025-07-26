import emailjs from '@emailjs/browser';

interface EmailProps {
    name: string;
    email: string;
    message: string;
}

export const sendEmail = async ({ name, email, message }: EmailProps) => {
    try {
        await emailjs.send(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string, {
            name,
            email,
            message,
        },
            {
                publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string,
            }
        )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );
    } catch (error) {
        console.log("Email sent failed", error);
    }
}