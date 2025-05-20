import os

def list_files(directory):
    """
    Lista todos os arquivos (com extensão) contidos na pasta 'directory'.
    Apenas os arquivos do diretório são listados, não inclui subpastas.
    """
    try:
        for filename in os.listdir(directory):
            full_path = os.path.join(directory, filename)
            if os.path.isfile(full_path):
                print(filename)
    except Exception as e:
        print(f"Ocorreu um erro: {e}")

if __name__ == '__main__':
    folder_path = input("Digite o caminho da pasta: ").strip()

    if os.path.isdir(folder_path):
        print(f"\nArquivos presentes em '{folder_path}':")
        list_files(folder_path)
    else:
        print("O caminho informado não é uma pasta válida.")
