/* eslint-disable react/prop-types */
const Result = ({
  recipe,
  removePrepare,
  prepare,
  mathTimeAndCalories,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="w-1/3 border-2 rounded-s-xl p-4 text-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">
          Want To Cook : {recipe.length}
        </h2>
        <hr />
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="text-sm">
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {recipe.map((food, idx) => (
                <tr className="hover" key={idx}>
                  <th>{idx + 1}</th>
                  <td>{food.food_name}</td>
                  <td>{food.cook_time}</td>
                  <td>{food.calories}</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        removePrepare(food.id);
                        mathTimeAndCalories(food.cook_time, food.calories);
                      }}
                      className="btn btn-accent mt-4"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* // prepare result */}
      <div>
        <h2 className="text-3xl font-bold mt-10 mb-4">
          Prepared To Cook : {prepare.length}
        </h2>
        <hr />
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="text-sm">
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {prepare.map((food, idx) => (
                <tr className="hover" key={idx}>
                  <th>{idx + 1}</th>
                  <td>{food.food_name}</td>
                  <td>{food.cook_time}</td>
                  <td>{food.calories}</td>
                </tr>
              ))}
              <tr>
                <th></th>
                <td></td>
                <td>Total Time : {totalTime}</td>
                <td>Total Calories: {totalCalories} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Result;
