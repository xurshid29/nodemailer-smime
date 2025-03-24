/// <reference types="node" />
import type MailMessage from "nodemailer/lib/mailer/mail-message";
export type PluginOptions = {
    recipient: Buffer | string;
    cipher?: string;
};
export declare const plugin: <T>({ recipient, cipher }: PluginOptions) => (mail: MailMessage<T>, callback: (err?: Error | null) => void) => Promise<void>;
