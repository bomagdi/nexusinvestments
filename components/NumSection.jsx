import Badge from "./Badge";
import { RiBriefcase4Fill } from "react-icons/ri";
import { RiTodoFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi2";
import { FaBuildingCircleCheck } from "react-icons/fa6";

const NumSection = () => {
  return (
    <section className="pContainer mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3  gap-x-60 gap-y-16">
        {/* Badge 1 */}
        <Badge
          containerStyles=""
          icon={<FaBuildingCircleCheck />}
          endCountNum={956}
          endCountText={"+"}
          badgeText="Apartments Sold"
        />
        {/* Badge 2 */}

        <Badge
          containerStyles=""
          icon={<RiTodoFill />}
          endCountNum={100}
          endCountText="+"
          badgeText="Finished Projects"
        />
        {/* Badge 3 */}

        <Badge
          containerStyles=""
          icon={<HiUserGroup />}
          endCountNum={595}
          endCountText="+"
          badgeText="Clients"
        />
      </div>
    </section>
  );
};

export default NumSection;
