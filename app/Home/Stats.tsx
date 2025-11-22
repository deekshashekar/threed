import { CardSpotlight } from "@/components/ui/card-spotlight";

const Stats = () => {
  return (
    <div>
      <CardSpotlight className="h-96 w-96">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">
          Authentication steps
        </p>
        <div className="text-neutral-200 mt-4 relative z-20">
          Follow these steps to secure your account:
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
            placeat quasi eveniet dicta quisquam reiciendis ipsa vero numquam
            assumenda, quis, cupiditate nemo mollitia? Totam excepturi aliquid,
            ut amet sed repellendus.
          </p>
        </div>
        <p className="text-neutral-300 mt-4 relative z-20 text-sm">
          Ensuring your account is properly secured helps protect your personal
          information and data.
        </p>
      </CardSpotlight>
    </div>
  );
};

export default Stats;
