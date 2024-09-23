

export default function Type({ type, children, done }) {
    if (done) return <p className={`type text-gray-600 bg-gray-400 w-fit px-2 capitalize`}>{children}</p>
    const styles = {
        home: `type ` + `text-green-700 bg-green-200 capitalize  `,
        personal: `type ` + `text-purple-700 bg-purple-200 w-fit px-2  capitalize `,
        business: `type ` + ` text-orange-700 bg-orange-200 w-fit px-2  capitalize `
    }
    return (
        <p className={`${styles[type]}`}>{children}</p>
    )
}
