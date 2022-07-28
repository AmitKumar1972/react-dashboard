import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import EastIcon from "@mui/icons-material/East";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import DownloadIcon from "@mui/icons-material/Download";
import LaunchIcon from "@mui/icons-material/Launch";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { PeopleAlt } from "@mui/icons-material";

function Part5() {
  return (
    <div className="Part5">
      <Card id="Part51" class="Card">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "normal",
          }}
        >
          <CardContent>
            <Typography component="div" variant="h5">
              {<WorkIcon sx={{ color: "#5048e9" }} />}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography
              sx={{
                mx: -3,
                my: 0,
                fontSize: 13,
                fontWeight: 550,
                color: "#5048e9",
              }}
            >
              Jobs
            </Typography>
          </CardContent>
        </Box>
        <CardContent>
          <Typography
            component="div"
            variant="h6"
            sx={{ mt: -3, color: "#121828", fontWeight: 550, fontSize: 17 }}
          >
            Find your dream job
          </Typography>
        </CardContent>

        <CardContent>
          <Typography
            sx={{ mt: -3, fontSize: 13, fontWeight: 550 }}
            color="text.secondary"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
        <CardActions sx={{ mt: 1, borderTop: 1, borderTopColor: "#e6e8f0" }}>
          <Button size="small">
            see all Activity <EastIcon />
          </Button>
        </CardActions>
      </Card>

      <Card id="Part52" class="Card">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "normal",
          }}
        >
          <CardContent>
            <Typography component="div" variant="h5">
              {<HelpCenterIcon sx={{ color: "#5048e9" }} />}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography
              sx={{
                mx: -3,
                my: 0,
                fontSize: 13,
                fontWeight: 550,
                color: "#5048e9",
              }}
            >
              Help Center
            </Typography>
          </CardContent>
        </Box>
        <CardContent>
          <Typography
            component="div"
            variant="h6"
            sx={{ mt: -3, color: "#121828", fontWeight: 550, fontSize: 17 }}
          >
            Need help figuring things out?
          </Typography>
        </CardContent>

        <CardContent>
          <Typography
            sx={{ mt: -3, fontSize: 13, fontWeight: 550 }}
            color="text.secondary"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
        <CardActions sx={{ mt: 1, borderTop: 1, borderTopColor: "#e6e8f0" }}>
          <Button size="small">
            Help <LaunchIcon />
          </Button>
        </CardActions>
      </Card>

      <Card id="Part53" class="Card">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "normal",
          }}
        >
          <CardContent>
            <Typography component="div" variant="h5">
              {<DownloadIcon sx={{ color: "#5048e9" }} />}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography
              sx={{
                mx: -3,
                my: 0,
                fontSize: 13,
                fontWeight: 550,
                color: "#5048e9",
              }}
            >
              Download
            </Typography>
          </CardContent>
        </Box>
        <CardContent>
          <Typography
            component="div"
            variant="h6"
            sx={{ mt: -3, color: "#121828", fontWeight: 550, fontSize: 17 }}
          >
            Download our Free PDF and learn how to get more job leads
          </Typography>
        </CardContent>

        <CardContent>
          <Typography
            sx={{ mt: -3, fontSize: 13, fontWeight: 550 }}
            color="text.secondary"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
        <CardActions sx={{ mt: 1, borderTop: 1, borderTopColor: "#e6e8f0" }}>
          <Button size="small">
            Download PDF <EastIcon />
          </Button>
        </CardActions>
      </Card>

      <Card id="Part54" class="Card">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "normal",
          }}
        >
          <CardContent>
            <Typography component="div" variant="h5">
              {<PeopleAlt sx={{ color: "#5048e9" }} />}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography
              sx={{
                mx: -3,
                my: 0,
                fontSize: 13,
                fontWeight: 550,
                color: "#5048e9",
              }}
            >
              Contacts
            </Typography>
          </CardContent>
        </Box>
        <CardContent>
          <Typography
            component="div"
            variant="h6"
            sx={{ mt: -3, color: "#121828", fontWeight: 550, fontSize: 17 }}
          >
            Contacts allow you to manage your company contracts
          </Typography>
        </CardContent>

        <CardContent>
          <Typography
            sx={{ mt: -3, fontSize: 13, fontWeight: 550 }}
            color="text.secondary"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
        <CardActions sx={{ mt: 1, borderTop: 1, borderTopColor: "#e6e8f0" }}>
          <Button size="small">
            MyContacts
            <EastIcon />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Part5;
