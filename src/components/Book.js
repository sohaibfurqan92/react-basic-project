const onClick = (e) => {
  console.log(e.target.previousElementSibling.textContent);
  e.preventDefault();
};

function Book({ img, author, title }) {
  return (
    <article className='book'>
      <img src={img} className='img' alt='' />
      <h4 className='author' style={{ color: 'blue' }}>
        {author}
      </h4>
      <h2 className='title'>{title}</h2>
      <button className='button' onClick={onClick}>
        Order Now
      </button>
    </article>
  );
}

export default Book;
