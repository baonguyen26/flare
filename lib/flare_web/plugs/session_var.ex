defmodule FlareWeb.SessionVarPlug do
  import Plug.Conn

  def assign_session_variables(conn, variable_name) do
    list = for var <- variable_name, into: %{}, do: {String.to_atom(var), get_session(conn, var)}
    conn |> merge_assigns(Map.to_list(list))
  end
end
