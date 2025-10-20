const {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    TextField,
    Box,
  } = MaterialUI;
  
  function ProjectCard({ name, members, canJoin, onJoin, onLeave }) {
    // State for hardware set quantities
    const [hwSet1, setHwSet1] = React.useState(50);
    const [hwSet2, setHwSet2] = React.useState(0);
  
    // State for user input (quantity entered)
    const [qty, setQty] = React.useState("");
  
    // Handlers for check in / out
    const handleCheckIn = () => {
      const val = parseInt(qty) || 0;
      if (val > 0) {
        setHwSet1(prev => Math.max(0, prev - val));
        setHwSet2(prev => Math.max(0, prev - val));
        setQty("");
      }
    };
  
    const handleCheckOut = () => {
      const val = parseInt(qty) || 0;
      if (val > 0) {
        setHwSet1(prev => Math.min(100, prev + val));
        setHwSet2(prev => Math.min(100, prev + val));
        setQty("");
      }
    };
  
    return (
      <Card
        variant="outlined"
        sx={{
          backgroundColor: canJoin ? "#f9f9f9" : "#e8f5e9", // gray if joinable, green if joined
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 20px",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ flex: 1, minWidth: 240 }}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2" color="text.secondary">
            list, of, authorized, users
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            HWSet1: {hwSet1}/100
          </Typography>
          <Typography variant="body2">HWSet2: {hwSet2}/100</Typography>
        </Box>
  
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <TextField
            label="Enter qty"
            size="small"
            sx={{ width: 100 }}
            value={qty}
            onChange={e => setQty(e.target.value)}
          />
          <Button variant="outlined" size="small" onClick={handleCheckIn}>
            Check In
          </Button>
          <Button variant="outlined" size="small" onClick={handleCheckOut}>
            Check Out
          </Button>
        </Box>
  
        <CardActions>
          {canJoin ? (
            <Button variant="contained" onClick={onJoin}>
              Join
            </Button>
          ) : (
            <Button variant="outlined" color="warning" onClick={onLeave}>
              Leave
            </Button>
          )}
        </CardActions>
      </Card>
    );
  }
  