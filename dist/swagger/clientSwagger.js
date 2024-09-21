/**
 * @swagger
 * /clients:
 *   post:
 *     summary: Create a new client
 *     tags: [Clients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClientModel'
 *     responses:
 *       201:
 *         description: The client was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClientModel'
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 *
 * components:
 *   schemas:
 *     ClientModel:
 *       type: object
 *       required:
 *         - name
 *         - mobileNo
 *         - email
 *         - adharcard
 *         - address
 *         - panNo
 *       properties:
 *         id:
 *           type: integer
 *           description: The client ID
 *         name:
 *           type: string
 *           description: The client's name
 *         mobileNo:
 *           type: string
 *           description: The client's mobile number
 *         email:
 *           type: string
 *           description: The client's email
 *         adharcard:
 *           type: string
 *           description: The client's Aadhar card number
 *         address:
 *           type: string
 *           description: The client's address
 *         panNo:
 *           type: string
 *           description: The client's PAN number
 *         logo:
 *           type: string
 *           description: Optional logo URL or path
 */
