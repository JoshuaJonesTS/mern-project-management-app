export default function ProjectsCard({ project }) {
  return (
    <div className="col-md-4">
      <div className="col-md-3">
        <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title">{project.name}</h5>
            </div>
        </div>
      </div>
    </div>
  )
}