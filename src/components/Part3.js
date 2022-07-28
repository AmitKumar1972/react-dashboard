import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { ExpandLess } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Part3() {
  return (
    <div className="Part3">
      <div className="Part3Card">
        <Card className="Card1">
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CardContent>
              <Typography component="div" variant="h5">
                {
                  <CircularProgress
                    size={100}
                    variant="determinate"
                    value={100}
                  />
                }
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <CardContent sx={{ color: "#5048e5" }}>
                <Typography
                  component="div"
                  variant="h3"
                  sx={{
                    mt: 0,
                    fontSize: 30,
                    fontWeight: "bold",
                    overflow: "hidden",
                  }}
                >
                  0.299 BTC
                </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  sx={{ mt: -3, fontSize: 13, fontWeight: 550 }}
                  color="text.secondary"
                >
                  Your crypto Wallet
                </Typography>
              </CardContent>
            </Box>
            <Box
              sx={{
                width: 40,
                height: 40,
                mx: 6,
                my: 4,
                border: 0,
                borderRadius: 1,
                bgcolor: "#edf9f8",
              }}
            >
              <ExpandLess sx={{ mx: 1, my: 1, color: "#3dc4b5" }} />
            </Box>
          </Box>
          <CardActions sx={{ mt: 1, borderTop: 1, borderTopColor: "#e6e8f0" }}>
            <Button size="small">
              see all Activity <EastIcon />
            </Button>
          </CardActions>
        </Card>
      </div>
      <div>
        <div className="Part3Card">
          <Card className="Card1">
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CardContent>
                <Typography component="div" variant="h5">
                  {
                    <CircularProgress
                      size={100}
                      variant="determinate"
                      value={100}
                      sx={{ color: "#10b981" }}
                    />
                  }
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <CardContent sx={{ color: "#10b981" }}>
                  <Typography
                    component="div"
                    variant="h3"
                    sx={{
                      mt: 0,
                      fontSize: 30,
                      fontWeight: "bold",
                      overflow: "hidden",
                    }}
                  >
                    $21,500 BTC
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography
                    sx={{ mt: -3, fontSize: 13, fontWeight: 550 }}
                    color="text.secondary"
                  >
                    Your private Wallet
                  </Typography>
                </CardContent>
              </Box>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  mx: 6,
                  my: 4,
                  border: 0,
                  borderRadius: 1,
                  bgcolor: "#fbf0f0",
                }}
              >
                <KeyboardArrowDownIcon
                  sx={{ mx: 1, my: 1, color: "#d14343" }}
                />
              </Box>
            </Box>
            <CardActions
              sx={{ mt: 1, borderTop: 1, borderTopColor: "#e6e8f0" }}
            >
              <Button size="small">
                Withdraw Money <EastIcon />
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Part3;
