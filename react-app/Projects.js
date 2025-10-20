// import components from Material UI UMD bundle
const { Container, Typography, Box, Snackbar, Alert } = MaterialUI;

function Projects() {
  const [projects, setProjects] = React.useState([
    { id: 1, name: "Smart Glasses", members: 2, canJoin: true },
    { id: 2, name: "Weather Viz", members: 4, canJoin: false },
    { id: 3, name: "ERS Game", members: 1, canJoin: true },
  ]);

  const [banner, setBanner] = React.useState({
    open: false,
    message: "",
    severity: "success",
  });

  function handleJoin(id) {
    setProjects(prev =>
      prev.map(p =>
        p.id === id ? { ...p, canJoin: false, members: p.members + 1 } : p
      )
    );
    setBanner({ open: true, message: "Joined project!", severity: "success" });
  }

  function handleLeave(id) {
    setProjects(prev =>
      prev.map(p =>
        p.id === id ? { ...p, canJoin: true, members: p.members - 1 } : p
      )
    );
    setBanner({ open: true, message: "Left project", severity: "info" });
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>

      {/* Map each project into a stacked layout */}
      {projects.map(proj => (
        <Box key={proj.id} sx={{ mb: 2 }}>
          <ProjectCard
            name={proj.name}
            members={proj.members}
            canJoin={proj.canJoin}
            onJoin={() => handleJoin(proj.id)}
            onLeave={() => handleLeave(proj.id)}
          />
        </Box>
      ))}

      {/* Snackbar popup */}
      <Snackbar
        open={banner.open}
        autoHideDuration={2500}
        onClose={() => setBanner({ ...banner, open: false })}
      >
        <Alert severity={banner.severity}>{banner.message}</Alert>
      </Snackbar>
    </Container>
  );
}
