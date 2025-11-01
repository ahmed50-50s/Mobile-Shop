import axios from "axios";

export default function SearchMobiles({ setMobiles, isSearching }) {
  function SearchData(search) {
    axios
      .get(`http://72.60.188.251:9090/api/v1/mobiles/search?keyword=${search}`)
      .then((response) => {
        setMobiles(response.data.content || []);
        isSearching(true);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }
  return (
    <>
      <div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            SearchData(e.target[0].value);
          }}
        >
          <input type="text" placeholder="ابحث عن الموبايل الذي تريده" />
          <button type="submit">بحث</button>
        </form>
      </div>
    </>
  );
}
