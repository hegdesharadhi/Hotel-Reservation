import React, { Component } from 'react'
import Title from './Title';
import {FaBeer, FaCocktail, FaHiking, FaShuttleVan} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free cocktails",
                info: "Core is the primary flavor; balance enhances the core with sweetness, acidity, or both;and seasoning adds another dimension and complements or contrasts with the core."
            },
            {
                icon:<FaHiking/>,
                title:"Endless hiking",
                info: "An outdoor activity which consists of walking in natural environments, often in mountainous or other scenic terrain."
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle",
                info: "Need private shuttle van or shuttle bus transportation? Metropolitan Shuttle can provide you with a shuttle service for your needs."
            },
            {
                icon:<FaBeer/>,
                title:"strongest beer",
                info: "Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea."
            }
        ]
    }
  render() {
    return (
        <section className='services'>
            <Title title='services'/>
            <div className='services-center'>
                {this.state.services.map((item,index)=>{
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                        
                        </article>
                })}
            
            </div>
        </section>
      
    )
  }
}