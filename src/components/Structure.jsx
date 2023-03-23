import React from 'react'
import Reviews from './reviews'
import { useState } from 'react'
const Structure = () => {

    const [reviewsData] = useState(Reviews)

  return (
        <div className='reviewContainer'>
                        {
                        reviewsData.map((data, index) => {
                        return(
                    <JobReview key={index}>
                        <div className='principal'>
                        <h2>{data.firstTitle}</h2>
                        <h2><strong>{data.secondTitle}</strong></h2>
                        <h3>Description</h3>
                        <p>{data.description}</p>
                        <h3>About the role</h3>
                        <p>{data.role}</p>
                        </div>
                        <h3>Your responsabilities include:</h3>
                        <ul className='reviewLists'>

                        {
                        data.responsabilities.map((work,index) => {
                        return(
                        <li key={index}>{work}</li>
                        )})}

                        </ul>
                        <h3>About you</h3>
                        <ul className='reviewLists'>

                        {
                        data.aboutYou.map((yourInfo, index) => {
                        return(
                        <li key={index}>{yourInfo}</li>
                        )})}

                        </ul>
                        <h3>Requirements</h3>
                        <ul className='reviewLists'>

                        {
                        data.requirements.map((require, index) => {
                        return(
                        <li className='erased' key={index}>{require}</li>
                        )})}

                        </ul>
                        <h3>Benefits</h3>
                        <ul className='reviewLists'>

                        {
                        data.benefitsCompany.map((require, index) => {
                        return(
                        <li key={index}>{require}</li>
                        )})}
                        
                        </ul>
                        <h3>About Whimsical</h3>
                        <p>{data.aboutCompany}</p>
                        <ul className='reviewLists'>
                            
                        {
                        data.operating.map((operate,index) => {
                        return(
                        <li key={index}>{operate}</li>
                        )})}

                        </ul>
                        <p>{data.secondAbout}</p>
                        <h3>Salary and compensation</h3>
                        <p>{data.salary}</p>
                        <h3>Benefits</h3>
                        <ul className='reviewLists'>

                        {
                        data.benefits.map((benefit,index) => {
                        return(
                                <li key={index}>{benefit}</li>
                            )})}
                        
                        </ul>
                    </JobReview>
                )})
            }
    </div>
  )
}

export default Structure