import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Form from './Form'

const header = 'The Form of Forms'
const subHeader = 'Login'

const App = () => (
  <React.Fragment>
    <Header header={header} subHeader={subHeader} />
    <Form />
    <Footer />
  </React.Fragment>
)

export default App
