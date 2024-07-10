import About from "../../components/about/About";
import Title from "../../components/title/Title";

function MainPage() {
    const aboutInfo = {
        title: "Some Title",
        body: "Some body"
    }

    return (
        <div>
            <About info={aboutInfo} />
            <Title text="Hello world" />
        </div>
    );
}

export default MainPage