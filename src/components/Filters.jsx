import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import Structure from './Structure'
import logo from '../assets/logo-square.png'
import arrow from '../assets/chevron-down-icon.svg'
import wing from '../assets/safetywing.png'



const Filters = () => {


    const [positions] = useState([
        {text: '🤓 Engineer'},
        {text: '💼 Executive'},
        {text: '👵 Senior', width:'90'},
        {text: '🤓 Developer'},
        {text: '💰 Finance', width:'100' },
        {text: '♾️ Sys Admin'}
    ])

    const [posts] = useState([
        {src:wing,
        text: 'Remote Health by SafetyWing',
        underText: 'Global health insurance for remote workers and nomads',
        button: <button>Join the waitlist</button>,
        background: '#343477'},
    ])

    const [jobPosts] = useState([
        {src:wing,
        text: 'Product Marketing Manager',
        underText: 'Whismical',
        textColor: 'black',
        places: ['🇺🇸 United States', '🇨🇦 Canada'],
        salary: '💰 $140k - $150k',
        filters: ['Marketing'],
        button: <button>Apply</button>,
        days: '19d',
        BtnColor: '#ffff',
        background: '#fff38f',
        structure: Structure},
    ])




    return (
      <Wrapper>
        <div className='principalFilters'>
          <img className='logo' src={logo}/>
          <ul>
              <li className='interactiveFilters'><input className='filter-style textFilter' placeholder='🔍 Search'/><div className='arrow'/></li>
              <li className='interactiveFilters'><input className='filter-style textFilter' placeholder='🌏 Location'/><div className='arrow'/></li>
              <li className='interactiveFilters'><div className='filter-style dv'>💵 Salary</div><div className='arrow'/></li>
              <li className='interactiveFilters'><div className='filter-style dv'>🎪 Benefits</div><div className='arrow'/></li>
          </ul>
  
          <select className='filter-style dv select-filter'>
                  <option selected value="default">🦴 Sort by</option>
                  <option value="date">🆕 Latest jobs</option>
                  <option value="salary">💵 Highest paid</option>
                  <option value="views">👀 Most viewed</option>
                  <option value="applied">✅ Most applied</option>
                  <option value="hot">🔥 Hottest</option>
                  <option value="benefits">🎪 Most benefits</option>
          </select>
        </div>
        <ul className='positions'>
        {
            positions.map((position, index) => {
                return(
                    <List key={index} width={position.width}>{position.text}</List>
                    )
            })
        }
        </ul>
        
        {
            posts.map((post, index) => {
                return(
                    <Post key={index} background={post.background}><img src={post.src}></img>
                    
                    <p><strong>{post.text}</strong>
                    <br/>
                    {post.underText}</p>
                    {post.button}</Post>
                )

            })
        }
        <ul className='PostBox'>
        {
            jobPosts.map((job, index) => {
                return(
                <div key={index} className='AllJobs'>
                    <JobPost black={job.textColor} background={job.background}>
                    <img src={job.src}></img>

                    <div className='JobTitle'>
                    <p>
                    <strong>{job.text}</strong>
                    <br/>
                    {job.underText}<br/>
                    {job.places?.map((place,index) => {
                        return(
                        <span key={index} className='labels'>{place}</span>
                    )})}

                    <span className='labels salary'>{job.salary}</span>
                    </p>
                    </div>

                    <div className='filters'>
                    {job.filters?.map((filter, index) => {
                        return(<div key={index}>{filter}</div>
                    )})}
                    </div>

                    {job.button}
                    {jobPosts.map((structuring, index) => {
                            return(
                                <div key={index}>{structuring.Structure}</div>
                            )})
                    }
                    </JobPost>
                </div>
                )})}
        </ul>
      </Wrapper>
    )
  }

const Wrapper = styled.div`
margin-top: 40px;
display: flex;
flex-flow: column;
width: 1100px;
gap: 1rem;
justify-content: space-between;
cursor: default;
.principalFilters{
    display:flex;
    gap:2rem;
}
.logo{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: 15px;
    cursor: zoom-in;
    &:hover{
        opacity: .7;
    }
}
ul{
    display: flex;
    gap: 2rem;
    list-style-type: none;
    padding: 0;
    margin-right:auto;
    .interactiveFilters{
    height:40px;
    width: 130px;
    z-index: 1;
    position:relative;
 }
    .arrow{
    background-image: url(${arrow});
    width: 15px;
    height: 15px;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    right:0px;
    bottom:7px;
    z-index: 1;
}
 
}
.filter-style {
    background-color: #ffff;
    outline: none;
    height: 100%;
    box-shadow: 0px 0px 2px rgb(201, 198, 198);
    border-radius: 20px;
    font-size: 15px;    
    font-weight: 800;
    border: 1px solid rgb(214, 211, 211);
    color: black;
    padding-left: 17px;
    cursor: cell;
    font-family: 'Nunito', sans-serif;
    width: 100%;
    &::placeholder{
        color:black;
        font-weight: 800;
    }

    &:hover{
        filter: brightness(0.96);
    }
}
.filter-style.select-filter {
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 43px;
    width: 150px;
    margin-top: 45px;
}


.dv{
    line-height: 2.5rem;
    padding-bottom: 0.1rem;
    }

.positions{
    gap: .6rem;
    margin: 0;
}
.PostBox{
        display:flex;
        flex-flow: column;
        position: relative;
        top:80px;
        gap:.7rem;
        width:1100px;
    }
    .AllJobs{
        position: relative;
    }
    .reviewContainer{
        position: relative;
        top:0;
    }
    
`
const List = styled.li`
    border: 2px dashed rgb(0, 0, 0, .2);
    border-radius: 20px;
    filter:grayscale(1);
    opacity: .5;
    height:max-content;
    padding: .3rem .5rem .3rem .6rem;
    font-weight: 800;
    width: max-content;
    margin-top: -35px;
    &:hover{
        opacity: 1;
        border-color: rgb(0, 0, 0, .2);
        background-color: #f5f5f5;
    }


`
const Post = styled.div`
  background-color: ${(props) => props.background? props.background : 'chocolate'};
  width:100%;
  height: 90px;
  position: absolute;
  top: 190px;
  border-radius: 10px;
  display:flex;
  align-items:center;
  cursor: pointer;
  p{
    font-size: 16px;
    color: ${(props) => props.black == 'black'? '#000' : '#ffff'};
  }

  img{
    border: 2px solid white;
    border-radius:50%;
    margin: 0 20px 0 20px;
  }
  button{
  font-family: 'Nunito', sans-serif;
  font-weight:800;
  font-size: 15px;
  background-color: #ffff;
  position: absolute;
  right:20px;
  border: none;
  border-radius: 10px;
  height:44px;
  width: 160px;
    cursor:pointer;
}

  &:hover{
    filter: brightness(.8);
    filter: opacity(.8);
  }
`;

const JobPost = styled(Post)`
    height:100px;
    position: relative;
    top:0;
    .JobTitle{
    line-height: 1.8rem;
    width:400px;
    margin-right:35px;
    white-space: nowrap;
    }
.labels{   
    color: #000;
    font-size: 13px;
    margin-right: .5rem;
    padding: .05rem .3rem;
    background-color: #ffff;
    border-radius: 10px;

}

.filters{
    display:flex;
    gap: 1rem;
    div {
  background-color: ${(props) => props.background === 'white' ? '#ffff' : 'transparent'};
  border: 2px solid ${(props) => props.background === 'white' ? '#ffff' : '#000'};
  border-radius: 13px;
  padding: 0.3rem;
  font-size: 13px;
  font-weight: bold;
  width: max-content;

  &:hover {
    background-color: ${(props) => props.background === 'white' ? '#ffff' : '#000'};
    color: ${(props) => props.background === 'white' ? 'transparent' : '#ffff'};
  }
}
}
`
const JobReview = styled.div`
background-color: #ffff;
box-shadow: 0px 0px 1px #000;
padding: 1rem 2rem;

.reviewLists{
    display:flex;
    flex-flow: column;
    gap: .8rem;
    list-style-type: disc;
    li{
        margin-left:50px;
        p{
            margin:0;
        }
      
    }
    .erased:nth-child(2){
    list-style-type: none;
    }
    .erased:nth-child(3){
    list-style-type: none;
    }
    .erased:nth-child(4){
    list-style-type: none;
    }
    li .countries{
    list-style-type: disc;
    }
    
}

`

export default Filters