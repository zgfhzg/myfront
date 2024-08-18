export default function Home({
    params: { id },
}: {
    params: { id: string };
}) {
    return (
        <h2>This is {id} Home</h2>
    );
}