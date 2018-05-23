import React from 'react';

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */
const CardGroup = (props) => (
    <div className="cardGroup">
        {props.children}
    </div>
);

const Card = (props) => (
    <div className="card cardGroup__card">
        <div className="card__description cardGroup__cardDescription">
            <div className={`icon fa ${props.icon} card__descriptionIcon`}></div>
            <div className='card__descriptionText'>
                {props.description}
                {props.hint && 
                    <p>({props.hint})</p>
                }
            </div>
        </div>
        <div className="card__price">{props.price}</div>
    </div>
);

const App = () => (
    <CardGroup>
        <Card description='Trial' icon='fa-thumbs-o-up' price="FREE!"/>
        <Card description="Basic tier" hint="most popular" icon='fa-trophy' price="$10.99"/>
        <Card description="Advanced tied" hint="only for enterprise-level professionals" icon="fa-bolt" price="$6,000.00"/>
   </CardGroup>
);

export default App;
