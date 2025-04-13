export async function getUserDetails({ token, studentId, apiBasePath }) {
  const studentRes = await fetch(`${apiBasePath}/api/v1/students/${studentId}`);

  if (!studentRes.ok) {
    return { success: false };
  }
  const student = await studentRes.json();

  return {
    success: true,
    data: student,
  };
}

// data: email , password

export async function login({ apiBasePath, data }) {
  const loginRes = await fetch(`${apiBasePath}/auth/login`, {
    method: "POST",
    ContentType: "application/json",
    body: { email: data.email, password: data.password },
  });

  if (!loginRes.ok) {
    return { success: false };
  }

  const user = await loginRes.json();

  return { success: true, data: user };
}

export async function signup({ apiBasePath, data }) {
  const signupRes = await fetch(`${apiBasePath}/auth/login`, {
    method: "POST",
    ContentType: "application/json",
    body: {
      email: data.email,
      password: data.password,
      name: data.name,
      role: "Student",
    },
  });

  if (!signupRes.ok) {
    return { success: false };
  }
}
