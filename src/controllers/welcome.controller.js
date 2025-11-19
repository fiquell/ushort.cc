export function rootHandler(_, res) {
    res.json({
        message: "Welcome to the API. Service is operational.",
        timestamp: new Date().toISOString(),
    });
}
