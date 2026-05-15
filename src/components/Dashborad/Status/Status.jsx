import CardStatus from "../../UI/CardStatus/CardStatus";
// import Styles from "./Status.module.css";

export default function Status() {
  return (
    <>
      <section className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-3">
            <CardStatus />
          </div>

          <div className="col-12 col-md-3">
            <CardStatus />
          </div>

          <div className="col-12 col-md-3">
            <CardStatus />
          </div>
          
          <div className="col-12 col-md-3">
            <CardStatus />
          </div>
        </div>
      </section>
    </>
  );
}
