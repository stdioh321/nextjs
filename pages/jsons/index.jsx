import { useHistory, BrowserRouter as Router, Route } from "react-router-dom";

const Jsons = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    let text = event.target.elements.text.value;
    window.location = "/jsons/" + text;
  };

  return (
    <div>
      <h1>Jsons</h1>
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" name="text" placeholder="1" required />
          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  );
};

export default Jsons;
