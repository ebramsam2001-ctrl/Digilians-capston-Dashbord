import { Outlet } from 'react-router-dom'

export default function Developers({ title }) {
    return (
        <>
            <section className="py-4">
                <Outlet title={ title } />
            </section>
        </>
    )
}
