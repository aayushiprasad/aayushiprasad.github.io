const { Box, Button } = MaterialUI;

function ButtonBar({ actions }) {
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
      {actions.map((a, i) => (
        <Button key={i} variant="outlined" onClick={a.onClick}>
          {a.label}
        </Button>
      ))}
    </Box>
  );
}
