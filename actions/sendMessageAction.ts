'use server';
import emailjs from '@emailjs/browser';

export async function handleSendMessage(tempateParams:any) {
    await emailjs
    .send(process.env.NEXT_PUBLIC_SERVICE_ID ?? '', process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '', tempateParams, {
        publicKey: process.env.NEXT_PUBLIC_USER_ID ?? '',
    })
    .then(
        () => {
            console.log('SUCCESS!');
        },
        (error) => {
            console.log('FAILED...', error.text);
        }
    );
}