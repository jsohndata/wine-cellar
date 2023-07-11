
const currentYear = new Date().getFullYear();
const gitHubUrl = "https://github.com/jsohndata/wine-cellar";

export default function Footer() {

  return (
    <footer>
      <p>&copy; {currentYear}
        <br />
        <a href={gitHubUrl} target="_blank" rel="noreferrer" >See Code in Github</a></p>
    </footer>
  );
}