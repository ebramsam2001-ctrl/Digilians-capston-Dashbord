import { Outlet } from "react-router-dom";


export default function Users({ title }) {
  return (
    <>
      <section className="py-4">
        <Outlet title={ title } />
      </section>
    </>
  );
}
