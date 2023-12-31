"use client"

import { z } from 'zod';
import { Form, FormProps } from './Form';

type FormModal<Schema extends z.ZodTypeAny, data> = FormProps<Schema, data>;
function FormModal<Schema extends z.ZodTypeAny, data>({ ...props }: FormModal<Schema, data>) {
    return (
        <Form {...props} routeBack />
    );
}
export { FormModal }