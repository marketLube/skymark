import "./index.css";
import Logo from "../assets/LP-03.svg";
import Globe from "../assets/LP-04.svg";
import GlobeSec from "../assets/LP-04.svg";
import Flags from "../assets/Flags.svg";

function Index() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </header>
      <main className="content">
        <div className="form-container">
          <img src={Globe} alt="logo" className="globimg" />
          <div className="image-text">
            <div>Start your</div>
            <div>global career</div>
            <div>today</div>
          </div>
          <img src={Flags} alt="flags" className="flagRow" />
          <form className="form">
            <div className="form-row">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="form-row">
              <input type="number" name="number" placeholder="Contact Number" />
            </div>
            <div className="form-row">
              <input type="text" name="location" placeholder="Location" />
            </div>
            <div className="form-row">
              <input type="email" name="mailid" placeholder="Mail Id" />
            </div>
            <div className="form-row">
              <select name="Country" defaultValue="" placeholder="Country">
                <option value="" disabled>
                  Country
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              <input type="text" name="education" placeholder="Education" />
            </div>
            <div className="form-row">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
      <div className="bottomDiv">
        <img src={GlobeSec} alt="logo" className="respoImg" />
        <div className="mobile-text">
          <div>Start your</div>
          <div>global career</div>
          <div>today</div>
        </div>
        <img src={Flags} alt="flags" className="flagRowRespo" />
      </div>
    </div>
  );
}

export default Index;
