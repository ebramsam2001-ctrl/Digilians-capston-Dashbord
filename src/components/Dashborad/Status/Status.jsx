import CardStatus from "../../UI/CardStatus/CardStatus";
// import Styles from "./Status.module.css";

export default function Status() {
  return (
    <>
      <section className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-3">
            <CardStatus counter="120" title="Projects" icon="p" />
          </div>
          
          <div className="col-12 col-md-3">
            <CardStatus counter="150" title="Users" icon="user" />
          </div>
          
          <div className="col-12 col-md-3">
            <CardStatus counter="200" title="Developer" icon="d" />
          </div>
          
          <div className="col-12 col-md-3">
            <CardStatus counter="50" title="Blogs" icon="blog" />
          </div>
        </div>
      </section>
    </>
  );
}
