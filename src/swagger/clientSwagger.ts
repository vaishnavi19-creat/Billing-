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
 *         - address
 *         - gstNo
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
 *         address:
 *           type: string
 *           description: The client's address
 *         gstNo:
 *           type: string
 *           description: The client's GST number
 *         logo:
 *           type: string
 *           description: Optional logo URL or path
 */