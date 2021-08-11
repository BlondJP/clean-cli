export async function delay(sec: number): Promise<void> {
    const time = sec*1000;

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('time out');
        }, time);
    });

    await promise;
}