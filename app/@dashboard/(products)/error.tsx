"use client"
import { Title, Text, Button, Container, Group } from '@mantine/core';
import classes from '@/app/_components/Error/ServerError.module.css';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
    }, [error])

    return (
        <div className={classes.root}>
            <Container>
                <div className={classes.label}>500</div>
                <Title className={classes.title}>مشکلی پیش آمده</Title>
                <Text size="lg" ta="center" className={classes.description}>
                    خطا در سرور لطفا به تیم برنامه نویسی خطا را گزارش دهید
                </Text>
                <Group justify="center">
                    <Button variant="white" size="md" onClick={reset}>
                        بارگیری صفحه
                    </Button>
                </Group>
            </Container>
        </div>
    );
}