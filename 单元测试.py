import unittest

from sudoku import generate_sudoku

class GenerateSudokuTestCase(unittest.TestCase):
    def test_generate_sudoku(self):
        generate_sudoku()

if __name__ == '__main__':
    unittest.main()