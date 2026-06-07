import { Star } from 'lucide-react'

export default function ReviewCard({ review }) {
  return (
    <div className="review-card card card-lift">
      <div className="stars">{[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}</div>
      <p>"{review.text}"</p>
      <b>{review.name}</b>
      <small>{review.role}</small>
    </div>
  )
}
