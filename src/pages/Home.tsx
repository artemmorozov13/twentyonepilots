import AboutGroup from "components/aboutGroup/AboutGroup"
import AboutProject from "components/aboutProject/AboutProject"
import Connection from "components/connaction/Connection"
import ConsumersList from "components/consumersList/ConsumersList"
import Contact from "components/contact/Contact"
import Header from "components/header/Header"
import Preview from "components/preview/Preview"

const Home = () => {
    return (
        <>
            <Header />
            <Preview />
            <ConsumersList />
            <Connection>
                <AboutProject />
                <Contact />
            </Connection>
            <AboutGroup />
        </>        
    )
}

export default Home