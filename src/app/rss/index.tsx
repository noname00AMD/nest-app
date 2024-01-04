import { component$ } from "@builder.io/qwik";
import articleModel from "../../../model/posts"
import {
  type DocumentHead,
  routeLoader$,
} from "@builder.io/qwik-city";

export const useTuyendung = routeLoader$(() => {
  const data = articleModel.findOne("tuyen-dung")
  return { data }
})
export default component$(() => {
  const data = useTuyendung()
  return (
    <>
      <div class={"grid grid-cols-12 gap-4 my-10 "} >
        <div class="col-span-4 col-start-5 pt-4 pb-10">
          <h4 class=" text-center font-extrabold">
            RSS List
          </h4>
          {

          }
        </div>
      </div>

    </>
  );
});

export const head: DocumentHead = {
  title: "About",
};
