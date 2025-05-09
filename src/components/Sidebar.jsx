import { groupPostsByDate } from '../utils/utils';

export default function Sidebar({ posts }) {
	const archive = groupPostsByDate(posts);
  
	return (
	  <aside className="sidebar">
		<h2>Archives</h2>
		{Object.keys(archive)
		  .sort((a, b) => Number(b) - Number(a))
		  .map((year) => (
			<div key={year}>
			  <h3>{year}</h3>
			  <ul>
				{Object.keys(archive[year]).map((month) => (
				  <li key={`${year}-${month}`}>
					<a
					  href="#"
					  onClick={(e) => {
						e.preventDefault();
						dispatchEvent(
						  new CustomEvent('archive-filter', {
							detail: { year, month },
						  })
						);
					  }}
					>
					  {month} ({archive[year][month].length})
					</a>
				  </li>
				))}
			  </ul>
			</div>
		  ))}
	  </aside>
	);
  }
  