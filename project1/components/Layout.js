import Head from 'next/head'
import Navbar from './Navbar'

const Layout = (props) => (
    <>
        <Head>
            <title>BitzPrice</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"></link>
        </Head>
        <Navbar />
        <div className="container">
            {props.children}
        </div>
            
    </>
)

export default Layout