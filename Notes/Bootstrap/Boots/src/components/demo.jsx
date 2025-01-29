import React from "react";

const Button = () => (
  <button className='btn btn-info'>
    Hello
  </button>
);

const Breadcrumb = ({ items }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      {items.map((item, index) => (
        <li
          key={index}
          className={`breadcrumb-item ${item.active ? 'active' : ''}`}
          aria-current={item.active ? 'page' : undefined}
        >
          {item.active ? item.label : <a href={item.href}>{item.label}</a>}
        </li>
      ))}
    </ol>
  </nav>
);

const Card = () => (
  <div className="card" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="card-link">Card link</a>
      <a href="#" className="card-link">Another link</a>
    </div>
  </div>
);

const Demo = () => {
  return (
    <div>
      <Button />
      <div className="alert alert-info" role="alert">
        <Breadcrumb items={[{ label: 'Home', active: true }]} />
        <Breadcrumb items={[
          { label: 'Home', href: '#' },
          { label: 'Library', active: true }
        ]} />
        <Breadcrumb items={[
          { label: 'Home', href: '#' },
          { label: 'Library', href: '#' },
          { label: 'Data', active: true }
        ]} />
        <Card />
      </div>
    </div>
  );
}

export default Demo;
