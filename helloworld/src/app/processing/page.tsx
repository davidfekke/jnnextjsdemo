function delay(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export default async function Processing() {
    return (<>
        <h1 className="text-4xl">Processing Page Loaded</h1>
    </>);
}