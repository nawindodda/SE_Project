import React, { useState, useEffect } from "react";
import axios from 'axios';

const CustomerFeedback = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: "John Doe", text: "Great service!", replies: [{ id: 1, name: "Company", text: "Thank you!" }] },
    { id: 2, name: "Jane Smith", text: "I loved the quick response from support.", replies: [{ id: 1, name: "Company", text: "We're glad you were satisfied!" }] },
    { id: 3, name: "Alice Johnson", text: "Could be better.", replies: [] },
    { id: 4, name: "Bob Brown", text: "Excellent product quality.", replies: [] },
    { id: 5, name: "Charlie Davis", text: "Not what I expected.", replies: [] },
    { id: 6, name: "Diana Evans", text: "Would recommend to my friends!", replies: [] },
    { id: 7, name: "Franklin Green", text: "Customer support was not helpful.", replies: [] },
    { id: 8, name: "Georgia Hill", text: "Superb experience with your service.", replies: [] },
    { id: 9, name: "Henry Irving", text: "I found the website difficult to navigate.", replies: [] },
    { id: 10, name: "Isabel Johnson", text: "Checkout process was seamless and fast.", replies: [] }
  ]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/comments');
      setReviews(response.data);
    } catch (err) {
      return;
    }
  };

  const addReply = (reviewId, name, replyText) => {

    const payload ={
      id:reviewId,
      name: name,
      text:replyText
    }
    const postComments = async () => {
      try {
        const response = await axios.post('http://localhost:5000/comments', payload);
        fetchData();
      } catch (err) {
        return;
      }
    };

    postComments();
    // setReviews(reviews => reviews.map(review => {
    //   if (review.id === reviewId) {
    //     return {
    //       ...review,
    //       replies: [...review.replies, { id: review.replies.length + 1, name, text: replyText }]
    //     };
    //   }
    //   return review;
    // }));
  };

  return (
    <div>
      <h1>Customer Reviews</h1>
      {reviews.map(review => (
        <div key={review.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <p><strong>{review.name}:</strong> {review.text}</p>
          <ul>
            {review.replies.map(reply => (
              <li key={reply.id}><strong>{reply.name}:</strong> {reply.text}</li>
            ))}
          </ul>
          <ReplyForm reviewId={review.id} onAddReply={addReply} />
        </div>
      ))}
    </div>
  );
};

const ReplyForm = ({ reviewId, onAddReply }) => {
  const [name, setName] = useState('');
  const [reply, setReply] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!reply.trim()) return;
    onAddReply(reviewId, name, reply);
    setName('');
    setReply('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Your name..."
        className='col-4'
        style={{ marginRight: '5px' }}
      />
      <input 
        type="text" 
        value={reply} 
        onChange={(e) => setReply(e.target.value)} 
        placeholder="Write a reply..." 
        style={{ marginRight: '5px' }}
      />
      <button className='col-2' type="submit">Reply</button>
    </form>
  );
};



export default CustomerFeedback;
