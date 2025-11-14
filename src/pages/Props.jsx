import React from 'react'

import Btn from '../components/Btn'
import Card2 from '../components/Card2'

const Props = () => {
  return (
    <>
        <Btn title="Yellow" color="btn btn-danger text-white"/>
        <Btn title="Change" color="btn btn-primary"/>
        <Btn title="Change" color="btn btn-warning"/>
        <Btn title="Change" color="btn btn-info"/>
        <Btn title='Green' color='btn btn-success' />
        

        <Card2 title="Yesss" mainTxt="Some quick example text to build on the card title and make up the bulk of the card’s content." color="bg-info" style="18rem" /> <br /><br />

        <Card2 title="Yesss" mainTxt="Some quick example text to build on the card title and make up the bulk of the card’s content." color="bg-success" style="18rem" /> <br /><br />

        <Card2 title="Yesss" mainTxt="Some quick example text to build on the card title and make up the bulk of the card’s content." color="bg-warning" style="18rem" /> <br /><br />

    </>
  )
}

export default Props