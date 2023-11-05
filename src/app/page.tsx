const getData = async () => {
  const fetchUsers = await fetch(`http://localhost:3000/api/add-user`, {
    cache: "no-store",
  });
  const response = fetchUsers.json();
  return response;
};

export default async function Home() {
  const users = await getData();

  console.log(users);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="font-bold text-3xl">Welcome From Vercel Postgres</h1>
      <div className="pt-16">
        {users.map((item: any, index: number) => (
          <div key={index} className="py-4">
            <h1 className="font-semibold text-xl">{item.name}</h1>
            <h3 className="font-medium text-lg">{item.email}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
