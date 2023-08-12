import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import { PiMagnifyingGlassBold } from "react-icons/pi";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContextSelector } from "use-context-selector";
import { UserContext } from "../../contexts/UserContext";

import processSearch from '../../assets/processing.gif'

const searchFormSchema = z.object({
  query: z.string().min(1, "Preencha o campo de pesquisa..."),
});

type searchFormDatas = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<searchFormDatas>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: "",
    },
  });

  const searchIssues = useContextSelector(
    UserContext,
    (context) => context.searchIssues
  );

  async function handleSearchForm(data: searchFormDatas) {
    await searchIssues(data.query);
    reset();
  }

  return (
    <SearchFormContainer>


      <h3>Publicações</h3>
      <form action="" onSubmit={handleSubmit(handleSearchForm)}>
        <input
          {...register("query")}
          type="text"
          placeholder="Busque por publicação..."
        />
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? <img src={processSearch}/> : <PiMagnifyingGlassBold />}
          Buscar
        </button>
      </form>
    </SearchFormContainer>
  );
}
