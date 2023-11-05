import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Team = () => {
  return (
    <section className="px-40 py-16 bg-[#eceff1]">
      <h1 className="lg:text-2xl uppercase">OUR TEAM</h1>
      <hr className="w-4 h-1 bg-green-600 mt-2" />
      <div className="mt-16">
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
              loading="lazy"
              width="360"
              height="300"
              decoding="async"
              data-nimg="1"
              className="w-full group/edit group-hover/item:scale-110 transition-all duration-300 ease-in-out"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Team;
