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
    const [hwSet1, setHwSet1] = React.useState(50);
    const [hwSet2, setHwSet2] = React.useState(0);
  
    const [qty, setQty] = React.useState("");
  
    const handleCheckIn = async () => {
      const val = parseInt(qty) || 0;
      if (val > 0) {
        const res = await fetch(`http://127.0.0.1:5000/checkin/${name}/${val}`);
        const data = await res.json();
        alert(data.message);
        setQty("");
      }
    };
    
    const handleCheckOut = async () => {
      const val = parseInt(qty) || 0;
      if (val > 0) {
        const res = await fetch(`http://127.0.0.1:5000/checkout/${name}/${val}`);
        const data = await res.json();
        alert(data.message);
        setQty("");
      }
    };    
  
    return (
      <Card
        variant="outlined"
        sx={{
          backgroundColor: canJoin ? "#f9f9f9" : "#e8f5e9",
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
  