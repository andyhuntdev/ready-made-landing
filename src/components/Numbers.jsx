export default function Numbers() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <dl className="grid gap-8 mx-auto text-gray-900 sm:grid-cols-3 lg:grid-cols-4 dark:text-white">
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
                        <dd className="font-light">developers</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
                        <dd className="font-light">contributors</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
                        <dd className="font-light">organizations</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">10M+</dt>
                        <dd className="font-light">happy people</dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}
